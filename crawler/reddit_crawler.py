import praw
from collections import Counter
import json
import os
from textblob import TextBlob
import re
from wordcloud import WordCloud
from PIL import Image
import numpy as np
import nltk
from nltk.stem import WordNetLemmatizer
nltk.download('wordnet')
nltk.download('omw-1.4')

reddit = praw.Reddit(
    client_id='qpLXgh9NOGj_4sLc6G-HDQ',
    client_secret='ExoZGb6wH7mdnhEtlNy79EaqouoEfQ',
    user_agent='script:dev-analysis:v1.0 (by u/Moist-Security7222)'
)

SUBREDDIT = 'InternationalDev'
LIMIT = 100  
SEEN_FILE = 'crawler/seen_ids.json'
DATA_FILE = 'public/data/keywords.json'

if os.path.exists(SEEN_FILE):
    with open(SEEN_FILE, 'r') as f:
        seen_ids = set(json.load(f))
else:
    seen_ids = set()

subreddit = reddit.subreddit(SUBREDDIT)
keywords = []
new_ids = []

lemmatizer = WordNetLemmatizer()

custom_stopwords = {
    'any', 'anyone', 'year', 'years', 'day', 'days', 'week', 'weeks', 'month', 'months', 'would', 'could', 'should', 'can', 'may', 'might', 'must', 'shall', 'will', 'time', 'hour', 'minute', 'today', 'tomorrow', 'yesterday', 'anything', 'someone', 'something', 'everyone', 'time', 'idea', 'thing', 'lot', 'everything', 'nothing', 'hello', 'hi', 'hey', 'thanks', 'thank', 'regards', 'cheers', 'goodbye', 'bye'
}

for post in subreddit.new(limit=LIMIT):
    if post.id in seen_ids:
        continue
    
    content = f"{post.title} {post.selftext or ''}".strip()
    
    content = re.sub(r"http\S+|www\S+|[^\w\s']", '', content)
    
    blob = TextBlob(content)
    
    phrases = []
    
    for phrase in blob.noun_phrases:
        phrase_clean = phrase.lower().strip()
        words = phrase_clean.split()
        
        if any(word in custom_stopwords for word in words):
            continue
        
        if 2 <= len(phrase_clean.split()) <= 5 and not re.match(r"^[^a-zA-Z]", phrase_clean):
            phrases.append(" ".join(lemmatizer.lemmatize(w) for w in words))
    
    for word, tag in blob.tags:
        word = word.lower()
        if tag.startswith("NN") and len(word) > 2:
            base_word = lemmatizer.lemmatize(word)
            if base_word not in custom_stopwords and base_word not in phrases:
                phrases.append(base_word)
    
    keywords.extend(phrases)
    new_ids.append(post.id)

print(f"keywords number：{len(keywords)}")
print("keywords example：", keywords[:10])

seen_ids.update(new_ids)
with open(SEEN_FILE, 'w') as f:
    json.dump(list(seen_ids), f)

common = Counter(keywords).most_common(50)

with open(DATA_FILE, 'w', encoding='utf-8') as f:
    json.dump(common, f, indent=2)

print(f" {len(common)} keywords have been saved to {DATA_FILE}")


mask_image = np.array(Image.open('public/cloud_mask.png'))

wordcloud = WordCloud(
    width=1600,
    height=900,
    scale=2,                         
    background_color=None,           
    mode='RGBA',                     
    font_path='C:/Windows/Fonts/arial.ttf',  
    mask=mask_image,                 
    # contour_width=1,
    # contour_color='lightgray',
    prefer_horizontal=0.9,          
    relative_scaling=0.4,
    max_words=200
).generate_from_frequencies(dict(common))

wordcloud.to_file('public/wordcloud.png')
print("The wordcloud has been generated successfully")


import os
import sys

# Add path to the Django project root if necessary, or just load dotenv
from dotenv import load_dotenv
load_dotenv()

try:
    from google import genai
    client = genai.Client(api_key=os.environ.get('GEMINI_API_KEY'))
    print("Genai client instantiated correctly")
    
    prompt = "Hello"
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt
    )
    print("Response successful:", response.text[:20])
except Exception as e:
    import traceback
    traceback.print_exc()

# import os
# import json
# from openai import OpenAI
# from dotenv import load_dotenv

# load_dotenv()

# client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# def generate_campaign_suggestion(contact):
#     name = contact.get("name", "there")
#     job_title = contact.get("job_title", "")
#     linkedin = contact.get("linkedin", "")
#     website = contact.get("website", "")

#     prompt = f"""
# You are an AI Sales Coach helping generate personalized email campaign suggestions for outreach.

# Here is the contact info:
# - Name: {name}
# - Job Title: {job_title}
# - LinkedIn: {linkedin}
# - Website: {website}

# Suggest an effective email campaign tailored to this person. 
# Output JSON with these fields:
# - subject: Subject line of the email.
# - body: Short, persuasive email body (with personalization).
# - schedule: Suggested time/date to send the email (future datetime in YYYY-MM-DD HH:MM format).
# - justification: Why this strategy works based on their title/role.
# """

#     try:
#         response = client.chat.completions.create(
#             model="gpt-4",  # or "gpt-3.5-turbo"
#             messages=[
#                 {"role": "system", "content": "You are an AI Email Campaign Coach."},
#                 {"role": "user", "content": prompt}
#             ],
#             temperature=0.7
#         )

#         message = response.choices[0].message.content

#         # Try to parse the result as JSON
#         return json.loads(message)

#     except Exception as e:
#         return {
#             "subject": "Oops! Something went wrong.",
#             "body": "We're unable to generate a campaign right now.",
#             "schedule": "2025-04-21 10:00",
#             "justification": f"Error: {str(e)}"
#         }

import os
import json
import re
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

SENDER_INFO = {
    "company_name": "EmailX",
    "sender_name": "Shahid Ali",
    "sender_position": "AI Outreach Specialist",
    "sender_email": "shahid.ali@emailx.ai"
}


client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def extract_json_from_response(content: str):
    """Extract JSON string from a Markdown-style code block."""
    match = re.search(r'```(?:json)?\s*(\{.*?\})\s*```', content, re.DOTALL)
    if match:
        return match.group(1)
    return content  # fallback if no code block

# def generate_campaign_suggestion(contact):
#     name = contact.get("name", "")
#     job_title = contact.get("job_title", "")
#     linkedin = contact.get("linkedin", "")
#     website = contact.get("website", "")

#     prompt = f"""
#     You are an AI Sales Coach helping generate personalized email campaign suggestions for outreach.

#     Here is the contact info:
#     - Name: {name}
#     - Job Title: {job_title}
#     - LinkedIn: {linkedin}
#     - Website: {website}

#     Here is your company/sender info:
#     - Your Company Name: {SENDER_INFO['company_name']}
#     - Your Name: {SENDER_INFO['sender_name']}
#     - Your Position: {SENDER_INFO['sender_position']}
#     - Your Email: {SENDER_INFO['sender_email']}

#     Create a personalized outreach campaign email using these values instead of writing placeholders like [Your Company Name].

#     Respond ONLY with a JSON code block like this:

#     ```json
#     {{
#       "subject": "...",
#       "body": "...",
#       "schedule": "YYYY-MM-DD HH:MM",
#       "justification": "..."
#     }}
#     """

#     try:
#         response = client.chat.completions.create(
#             model="gpt-4",
#             messages=[
#                 {"role": "system", "content": "You are an AI Email Campaign Coach."},
#                 {"role": "user", "content": prompt}
#             ],
#             temperature=0.7
#         )

#         message = response.choices[0].message.content
#         json_string = extract_json_from_response(message)
#         return json.loads(json_string)

#     except Exception as e:
#         return {
#             "subject": "Oops! Something went wrong.",
#             "body": "We're unable to generate a campaign right now.",
#             "schedule": "2025-04-21 10:00",
#             "justification": f"Error: {str(e)}"
#         }


def generate_campaign_suggestion(contact):
    name = contact.get("name", "")
    job_title = contact.get("job_title", "")
    linkedin = contact.get("linkedin", "")
    website = contact.get("website", "")

    prompt = f"""
    You are an AI Sales Coach helping generate personalized email campaign suggestions for outreach.

    Here is the contact info:
    - Name: {name}
    - Job Title: {job_title}
    - LinkedIn: {linkedin}
    - Website: {website}

    Here is your company/sender info:
    - Your Company Name: {SENDER_INFO['company_name']}
    - Your Name: {SENDER_INFO['sender_name']}
    - Your Position: {SENDER_INFO['sender_position']}
    - Your Email: {SENDER_INFO['sender_email']}

    Create a personalized outreach campaign email using these values instead of writing placeholders like [Your Company Name].

    Respond ONLY with a JSON code block like this:

    ```json
    {{
      "subject": "...",
      "body": "...",
      "schedule": "YYYY-MM-DD HH:MM",
      "justification": "...",
      "citations": [
        {{
          "id": 1,
          "source_url": "url source"
        }},
        {{
          "id": 2,
          "source_url": "url source"
        }}
      ]
    }}
    """

    try:
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "system", "content": "You are an AI Email Campaign Coach."},
                      {"role": "user", "content": prompt}],
            temperature=0.7
        )

        message = response.choices[0].message.content
        json_string = extract_json_from_response(message)
        suggestion = json.loads(json_string)

        # Hardcoded citations for demonstration
        # suggestion['citations'] = [
        #     {"id": 1, "source_url": "https://example.com/article"},
        #     {"id": 2, "source_url": "https://example.com/research"}
        # ]

        return suggestion

    except Exception as e:
        return {
            "subject": "Oops! Something went wrong.",
            "body": "We're unable to generate a campaign right now.",
            "schedule": "2025-04-21 10:00",
            "justification": f"Error: {str(e)}",
            "citations": []
        }

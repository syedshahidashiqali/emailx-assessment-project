

def generate_campaign_suggestion(contact):
    job_title = contact.get("job_title", "").lower()
    name = contact.get("name", "Friend")

    # Simple rule-based tone and content
    if "director" in job_title or "vp" in job_title:
        tone = "formal"
        subject = f"Let's Strategize Growth, {name.split()[0]}"
        body = (
            f"Dear {name},\n\n"
            "I wanted to share a few insights on how your team at a leadership level can leverage AI for accelerated growth.\n\n"
            "Looking forward to exploring synergies.\n\n"
            "Best regards,\nEmailX Team"
        )
    elif "manager" in job_title or "lead" in job_title:
        tone = "neutral"
        subject = f"Boosting Efficiency with AI – A Quick Idea"
        body = (
            f"Hi {name},\n\n"
            "We’ve helped marketing teams improve engagement by 30% using data-backed AI workflows.\n"
            "Would love to share a few tips tailored for your goals.\n\n"
            "Cheers,\nEmailX"
        )
    else:
        tone = "casual"
        subject = f"Hey {name}, want to try AI magic?"
        body = (
            f"Hey {name},\n\n"
            "I thought you'd enjoy a peek into how AI tools can help simplify your daily tasks and create impact.\n\n"
            "Let's chat soon!\n- EmailX Bot"
        )

    return {
        "subject": subject,
        "body": body,
        "schedule": "2025-04-21 10:00",
        "justification": f"Generated using simple rules based on job title ('{job_title}') and contact name ('{name}')."
    }

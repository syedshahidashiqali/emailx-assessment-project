export interface ContactI {
    id: number;
    name: string;
    job_title: string;
    linkedin: string;
}

export interface CampaignSuggestionI {
    subject: string;
    body: string;
    schedule: string;
    justification: string;
    citations?: CitationI[];
}

export interface CitationI {
    id: number;
    source_url: string;
}

const BASE_URL = "http://localhost:5000";

export async function fetchContacts(): Promise<ContactI[]> {
    const res = await fetch(BASE_URL + "/contacts");
    return res.json();
}

export async function fetchCampaign(contactId: number): Promise<CampaignSuggestionI> {
    const res = await fetch(`${BASE_URL}/suggest/${contactId}`);
    return res.json();
}

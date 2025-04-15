import { useState } from "react";
import { Table } from "react-bootstrap";
import { ContactI, fetchCampaign, CampaignSuggestionI } from "../lib/api";
import CampaignModal from "./CampaignModal";

interface ContactTablePropsI {
    contacts: ContactI[];
}

export default function ContactTable({ contacts }: ContactTablePropsI) {
    const [showModal, setShowModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState<ContactI | null>(null);
    const [suggestion, setSuggestion] = useState<CampaignSuggestionI | null>(null);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async (contact: ContactI) => {
        setSelectedContact(contact);
        setSuggestion(null);
        setLoading(true);
        setShowModal(true);
        try {
            const result = await fetchCampaign(contact.id);
            setSuggestion(result);
        } catch (e) {
            setSuggestion(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="hidden md:block overflow-x-auto rounded-lg shadow-md bg-white">
                <Table
                    responsive
                    striped
                    bordered
                    hover
                    className="min-w-full divide-y divide-gray-200"
                >
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Name</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold uppercase">Job Title</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold uppercase">LinkedIn</th>
                            <th className="px-4 py-3 text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {contacts.map((contact) => (
                            <tr key={contact.id} className="hover:bg-gray-50 transition-all">
                                <td className="px-4 py-3 text-sm text-gray-800">{contact.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-600">{contact.job_title}</td>
                                <td className="px-4 py-3 text-sm">
                                    <a
                                        href={contact.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        LinkedIn
                                    </a>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <button
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition duration-150"
                                        onClick={() => handleGenerate(contact)}
                                    >
                                        Generate Campaign
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>

            {/* Mobile stacked layout */}
            <div className="md:hidden space-y-4 mt-4">
                {contacts.map(contact => (
                    <div key={contact.id} className="bg-white shadow rounded-lg p-4 space-y-2">
                        <div className="text-gray-900 font-medium">{contact.name}</div>
                        <div className="text-gray-600 text-sm">{contact.job_title}</div>
                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-sm hover:underline block"
                        >
                            LinkedIn
                        </a>
                        <button
                            className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium"
                            onClick={() => handleGenerate(contact)}
                        >
                            Generate Campaign
                        </button>
                    </div>
                ))}
            </div>

            <CampaignModal
                show={showModal}
                onClose={() => setShowModal(false)}
                contact={selectedContact}
                suggestion={suggestion}
                loading={loading}
            />
        </>
    );
}

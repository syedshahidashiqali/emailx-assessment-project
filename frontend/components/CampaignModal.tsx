import { Modal, Button } from "react-bootstrap";
import { CampaignSuggestionI, ContactI } from "@/lib/api";
import LoadingSpinner from "./LoadingSpinner";

interface CampaignModalPropsI {
    show: boolean;
    onClose: () => void;
    contact: ContactI | null;
    suggestion: CampaignSuggestionI | null;
    loading: boolean;
}

export default function CampaignModal({ show, onClose, contact, suggestion, loading }: CampaignModalPropsI) {
    return (
        <Modal show={show} onHide={onClose} scrollable>
            <Modal.Header closeButton>
                <Modal.Title>
                    <span className="text-lg font-semibold text-gray-800">
                        Campaign Suggestion for {contact?.name}
                    </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                {loading ? (
                    <LoadingSpinner title="Generating suggestion..." />
                ) : suggestion ? (
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Subject</p>
                            <p className="text-base text-gray-800">{suggestion.subject}</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-500">Body</p>
                            <p className="text-base text-gray-800 whitespace-pre-line">{suggestion.body}</p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-500">Schedule</p>
                            <p className="text-base text-gray-800">{suggestion.schedule}</p>
                        </div>

                        {/* <div>
                            <p className="text-sm font-medium text-gray-500">Justification</p>
                            <p className="text-base text-gray-800 whitespace-pre-line">{suggestion.justification}</p>
                        </div> */}
                        <div>
                            <p className="text-sm font-medium text-gray-500">Justification</p>
                            <p className="text-base text-gray-800 whitespace-pre-line">
                                {suggestion.justification}

                                {/* 👇 Render inline citation numbers */}
                                {suggestion.citations && suggestion.citations.length > 0 && (
                                    <>
                                        {" "}
                                        {suggestion.citations.map(c => (
                                            <sup
                                                key={c.id}
                                                className="bg-indigo-600 text-white py-0.5 px-1 rounded-md cursor-pointer hover:underline ml-1"
                                                onClick={() => window.open(c.source_url, "_blank")}
                                            >
                                                {c.id}
                                            </sup>
                                        ))}
                                    </>
                                )}
                            </p>
                        </div>

                        {/* Sources List */}
                        {suggestion.citations && suggestion.citations.length > 0 && (
                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-sm font-medium text-gray-500 mb-2">Sources</p>
                                <ul className="list-disc list-inside space-y-1 text-sm  ">
                                    {suggestion.citations.map(c => (
                                        <li key={c.id}>
                                            <a href={c.source_url} target="_blank" rel="noopener noreferrer" className=" !text-gray-500">
                                                [{c.id}] {c.source_url}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}


                    </div>
                ) : (
                    <p className="text-red-500 font-medium">No suggestion generated.</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300 transition font-medium px-4 py-2 rounded-md"
                    variant="secondary" onClick={onClose}
                >
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

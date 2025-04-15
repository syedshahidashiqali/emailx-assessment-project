import { fetchContacts, ContactI } from "../lib/api";
import ContactTable from "../components/ContactTable";
import useLoader from "@/hooks/loader";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Home() {
  const { isLoading: contactsLoading, data: contacts } = useLoader(async () => {
    return await fetchContacts()
  }, [], [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">EmailX AI Campaign Coach</h1>
      {contactsLoading ? (
        <LoadingSpinner />
      ) : (
        <ContactTable contacts={contacts} />
      )}
    </main>
  );
}

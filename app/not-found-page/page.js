import { notFound } from "next/navigation";

export default async function NotFoundPage() {

    if(true) {
        notFound();
    }

    return (
        <>
            <h1>NotFoundPage</h1>
        </>
    );
};

import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../Layout/Layout';

export default function Unauthorized() {

    const router = useRouter();
    const { message } = router.query;
    console.log(message)
    console.log("sssssssssssss")
    return (
        <Layout title="Unauthorized Page">
            <h1 className="text-xl">Access Denied</h1>
            {message && <div className="mb-4 text-red-500">{message}</div>}
        </Layout>
    );
}
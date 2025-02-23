import React from 'react';
import { useRouter } from 'next/router';

const WorkPage = () => {
    const router = useRouter();
    const { workId } = router.query;

    return (
        <div>
            <h1>Work Page</h1>
            <p>Work ID: {workId}</p>
        </div>
    );
};

export default WorkPage;
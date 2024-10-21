import React from 'react';

const Diagnostic = ({ diagnosis }) => {

    const formatApiResponse = (response) => {
        const points = response.match(/(\d+\.\s\*\*[^\*]+\*\*:.*?)\.(?=\s+\d+\.|$)/gs);

        if (points) {
            return (
                <ul>
                    {points.map((point, index) => {
                        // Split each point by the first colon into title and content
                        const [title, content] = point.split(/:\s*(.+)/);
                        return (
                            <li key={index}>
                                <strong>{title.trim()}</strong>: {content.trim()}
                            </li>
                        );
                    })}
                </ul>
            );
        }
        return <p>{response}</p>;
    };

    return (
        <div>
            <h3>Possible Causes:</h3>
            {formatApiResponse(diagnosis)}
        </div>
    );
};

export default Diagnostic;

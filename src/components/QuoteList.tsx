import React from 'react';
import QuoteItem from './QuoteItem';

interface QuoteListProps {
    quotes: { id: string; author: string; category: string; text: string }[];
    onDelete: (id: string) => void;
}

const QuoteList: React.FC<QuoteListProps> = ({ quotes, onDelete }) => {
    return (
        <div>
            {quotes.map(quote => (
                <QuoteItem key={quote.id} {...quote} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default QuoteList;

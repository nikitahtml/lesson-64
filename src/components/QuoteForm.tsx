import React, { useState } from 'react';

interface QuoteFormProps {
    initialAuthor?: string;
    initialCategory?: string;
    initialText?: string;
    onSave: (author: string, category: string, text: string) => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ initialAuthor = '', initialCategory = '', initialText = '', onSave }) => {
    const [author, setAuthor] = useState(initialAuthor);

    const [category, setCategory] = useState(initialCategory);

    const [text, setText] = useState(initialText);



    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSave(author, category, text);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
            <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" required />
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Quote text" required />
            <button type="submit">Save</button>
        </form>
    );
};

export default QuoteForm;

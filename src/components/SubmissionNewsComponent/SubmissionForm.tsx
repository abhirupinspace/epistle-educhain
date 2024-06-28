import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../../scss/SubmissionForm.scss';

interface FormData {
    title: string;
    subheading: string;
    description: string;
    genre: string;
    location: string;
    time: string;
    link: string;
}

const SubmissionForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        subheading: '',
        description: '',
        genre: '',
        location: '',
        time: '',
        link: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    const handleCancel = () => {
        setFormData({
            title: '',
            subheading: '',
            description: '',
            genre: '',
            location: '',
            time: '',
            link: ''
        });
    };

    return (
        <div className='fullForm'>
            <form className="submission-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Subheading</label>
                    <input
                        type="text"
                        name="subheading"
                        value={formData.subheading}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Genre</label>
                    <input
                        type="text"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Time</label>
                    <input
                        type="text"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Link</label>
                    <input
                        type="text"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-actions">
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default SubmissionForm;

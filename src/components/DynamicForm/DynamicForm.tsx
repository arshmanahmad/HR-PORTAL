import React, { useState, ChangeEvent, FormEvent } from 'react';
import profilePic from '../../assets/images/user_profile.png';

interface FormField {
    name: string;
    label: string;
    type: 'text' | 'select' | 'file' | 'date' | 'textarea' | 'profileFile' | "time"; // Include 'profileFile'
    options?: string[]; // Only for 'select' type
    width?: string; // Optional width property for the field
    minWidth?: string; // Optional min-width property for the field
    defaultValue?: string | File; // Default value for the field
}

interface FormProps {
    fields: FormField[];
    onSubmit: (formData: FormData) => void;
    buttonText: string;
    fieldsPerRow?: number; // Optional prop to specify number of fields per row
}

const DynamicForm: React.FC<FormProps> = ({ fields, onSubmit, buttonText, fieldsPerRow = 1 }) => {
    const [formState, setFormState] = useState<{ [key: string]: string | File }>(() => {
        const initialState: { [key: string]: string | File } = {};
        fields.forEach(field => {
            initialState[field.name] = field.defaultValue || '';
        });
        return initialState;
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, type } = e.target;

        if (type === 'file' || type === 'profileFile') {
            const files = (e.target as HTMLInputElement).files;
            if (files && files.length > 0) {
                setFormState({
                    ...formState,
                    [name]: files[0],
                });
            } else {
                setFormState({
                    ...formState,
                    [name]: '',
                });
            }
        } else {
            const { value } = e.target;
            setFormState({
                ...formState,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in formState) {
            formData.append(key, formState[key]);
        }
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', gridTemplateColumns: `repeat(${fieldsPerRow}, 1fr)` }}>
            {fields.map((field) => (
                <div key={field.name} style={{
                    marginBottom: '1rem',
                    width: field.width || '100%',
                    minWidth: field.minWidth || '150px' // Default min-width
                }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>{field.label}</label>
                    {field.type === 'text' && (
                        <input
                            type="text"
                            name={field.name}
                            value={formState[field.name] as string}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    )}
                    {field.type === 'select' && (
                        <select
                            name={field.name}
                            value={formState[field.name] as string}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                        >
                            {field.options?.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    )}
                    {field.type === 'file' && (
                        <div style={{ display: 'flex', alignItems: 'center' }} className='border w-[45%] shadow-md rounded-lg'>
                            <label className="custom-file-upload p-1" style={{ marginRight: '10px' }}>
                                <input
                                    type="file"
                                    name={field.name}
                                    onChange={handleChange}
                                    style={{ display: 'none' }}
                                />
                                {!formState[field.name] && <span>Choose File</span>}
                            </label>
                            {formState[field.name] && (
                                <span className='text-[grey]'>{(formState[field.name] as File).name}</span>
                            )}
                        </div>
                    )}
                    {field.type === 'profileFile' && (
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img
                                src={formState[field.name] ? URL.createObjectURL(formState[field.name] as File) : profilePic}
                                alt="Profile"
                                style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '0.5rem' }}
                            />
                            <label className="custom-file-upload">
                                <input
                                    type="file"
                                    name={field.name}
                                    onChange={handleChange}
                                    style={{ display: 'none' }}
                                />
                                {!formState[field.name] && <span>Choose File</span>}
                            </label>
                        </div>
                    )}
                    {field.type === 'date' && (
                        <input
                            type="date"
                            name={field.name}
                            value={formState[field.name] as string}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    )}
                    {field.type === 'time' && (
                        <input
                            type="time"
                            name={field.name}
                            value={formState[field.name] as string}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    )}
                    {field.type === 'textarea' && (
                        <textarea
                            name={field.name}
                            value={formState[field.name] as string}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    )}
                </div>
            ))}

            <div style={{ gridColumn: `span ${fieldsPerRow}` }}>
                <button type="submit" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    {buttonText}
                </button>
            </div>
        </form>
    );
};

export default DynamicForm;

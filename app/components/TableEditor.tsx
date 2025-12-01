import React, { useState, useEffect } from 'react';
import { Form, Button, CloseButton } from 'react-bootstrap';
import { BsPlus, BsTrash } from 'react-icons/bs';

interface Field {
    name: string;
    type: string;
    isPK?: boolean;
}

interface TableData {
    tableName: string;
    fields: Field[];
}

interface TableEditorProps {
    table: TableData;
    onUpdate: (data: TableData) => void;
    onClose: () => void;
}

export default function TableEditor({ table, onUpdate, onClose }: TableEditorProps) {
    const [tableName, setTableName] = useState(table.tableName);
    const [fields, setFields] = useState<Field[]>(table.fields);

    useEffect(() => {
        setTableName(table.tableName);
        setFields(table.fields);
    }, [table]);

    const handleTableNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newName = e.target.value;
        setTableName(newName);
        onUpdate({ ...table, tableName: newName, fields });
    };

    const handleFieldChange = (index: number, key: keyof Field, value: any) => {
        const newFields = [...fields];
        newFields[index] = { ...newFields[index], [key]: value };
        setFields(newFields);
        onUpdate({ ...table, tableName, fields: newFields });
    };

    const addField = () => {
        const newFields = [...fields, { name: 'new_field', type: 'VARCHAR(50)', isPK: false }];
        setFields(newFields);
        onUpdate({ ...table, tableName, fields: newFields });
    };

    const removeField = (index: number) => {
        const newFields = fields.filter((_, i) => i !== index);
        setFields(newFields);
        onUpdate({ ...table, tableName, fields: newFields });
    };

    return (
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg border-l border-gray-200 p-4 overflow-y-auto z-50">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Edit Table</h3>
                <CloseButton onClick={onClose} />
            </div>

            <Form.Group className="mb-4">
                <Form.Label>Table Name</Form.Label>
                <Form.Control
                    type="text"
                    value={tableName}
                    onChange={handleTableNameChange}
                />
            </Form.Group>

            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-md font-semibold">Fields</h4>
                    <Button variant="link" size="sm" className="p-0 text-decoration-none" onClick={addField}>
                        <BsPlus className="inline-block text-lg" />
                    </Button>
                </div>

                {fields.map((field, index) => (
                    <div key={index} className="mb-3 p-2 border rounded bg-gray-50">
                        <div className="flex justify-between mb-2">
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Field Name"
                                value={field.name}
                                onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                                className="mr-2"
                            />
                            <Button variant="outline-danger" size="sm" onClick={() => removeField(index)}>
                                <BsTrash />
                            </Button>
                        </div>
                        <div className="flex items-center">
                            <Form.Select
                                size="sm"
                                value={field.type}
                                onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
                                className="mr-2"
                            >
                                <option value="INT">INT</option>
                                <option value="VARCHAR(50)">VARCHAR(50)</option>
                                <option value="VARCHAR(100)">VARCHAR(100)</option>
                                <option value="TEXT">TEXT</option>
                                <option value="TIMESTAMP">TIMESTAMP</option>
                                <option value="BOOLEAN">BOOLEAN</option>
                            </Form.Select>
                            <Form.Check
                                type="checkbox"
                                label="PK"
                                checked={field.isPK || false}
                                onChange={(e) => handleFieldChange(index, 'isPK', e.target.checked)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

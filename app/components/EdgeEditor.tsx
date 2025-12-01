import React from 'react';
import { Form, Button, CloseButton } from 'react-bootstrap';
import { Edge, MarkerType } from '@xyflow/react';
import { BsTrash } from 'react-icons/bs';

interface EdgeEditorProps {
    edge: Edge;
    onUpdate: (edgeId: string, data: Partial<Edge>) => void;
    onDelete: (edgeId: string) => void;
    onClose: () => void;
}

export default function EdgeEditor({ edge, onUpdate, onDelete, onClose }: EdgeEditorProps) {
    const getArrowType = () => {
        const hasStart = edge.markerStart !== undefined;
        const hasEnd = edge.markerEnd !== undefined;

        if (hasStart && hasEnd) return 'both';
        if (hasStart) return 'source';
        if (hasEnd) return 'target';
        return 'none';
    };

    const handleArrowChange = (type: string) => {
        let updates: Partial<Edge> = {};

        switch (type) {
            case 'none':
                updates = { markerStart: undefined, markerEnd: undefined };
                break;
            case 'source':
                updates = { markerStart: { type: MarkerType.ArrowClosed }, markerEnd: undefined };
                break;
            case 'target':
                updates = { markerStart: undefined, markerEnd: { type: MarkerType.ArrowClosed } };
                break;
            case 'both':
                updates = { markerStart: { type: MarkerType.ArrowClosed }, markerEnd: { type: MarkerType.ArrowClosed } };
                break;
        }

        onUpdate(edge.id, updates);
    };

    return (
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-lg border-l border-gray-200 p-4 overflow-y-auto z-50">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Edit Connection</h3>
                <CloseButton onClick={onClose} />
            </div>

            <Form.Group className="mb-4">
                <Form.Label>Arrow Direction</Form.Label>
                <Form.Select
                    value={getArrowType()}
                    onChange={(e) => handleArrowChange(e.target.value)}
                >
                    <option value="none">None</option>
                    <option value="target">Target (Default)</option>
                    <option value="source">Source</option>
                    <option value="both">Both</option>
                </Form.Select>
            </Form.Group>

            <div className="mt-4 pt-4 border-t border-gray-200">
                <Button variant="outline-danger" className="w-full" onClick={() => onDelete(edge.id)}>
                    <BsTrash className="inline-block mr-2" /> Delete Connection
                </Button>
            </div>
        </div>
    );
}

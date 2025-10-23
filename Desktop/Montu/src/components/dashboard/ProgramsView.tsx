// src/components/dashboard/ProgramsView.tsx

import React, { useState } from 'react';
import { Zap, PlusIcon, Edit, Trash2, X } from 'lucide-react';
import { useTrainer } from '../../context/TrainerContext';
import { MasterExercise } from '../../types';

// --- Sub-componente: Modal para Crear/Editar Ejercicio ---
interface ExerciseEditorModalProps {
    isOpen: boolean;
    onClose: () => void;
    exercise?: MasterExercise | null; // Si se pasa un ejercicio, es para editar
}

const ExerciseEditorModal: React.FC<ExerciseEditorModalProps> = ({ isOpen, onClose, exercise }) => {
    const { addMasterExercise, updateMasterExercise } = useTrainer();
    const [name, setName] = useState(exercise?.name || '');
    const [muscleGroup, setMuscleGroup] = useState(exercise?.muscleGroup || '');
    const [videoUrl, setVideoUrl] = useState(exercise?.videoUrl || '');
    const [isSaving, setIsSaving] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            if (exercise) {
                // Editar ejercicio existente
                await updateMasterExercise(exercise.id, { name, muscleGroup, videoUrl });
            } else {
                // Crear nuevo ejercicio
                await addMasterExercise({ name, muscleGroup, videoUrl });
            }
            onClose();
        } catch (error) {
            console.error("Error guardando ejercicio:", error);
            alert("No se pudo guardar el ejercicio.");
        } finally {
            setIsSaving(false);
        }
    };

    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
                <div className="p-6 border-b flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-800">{exercise ? 'Editar Ejercicio' : 'Crear Nuevo Ejercicio'}</h3>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200"><X className="w-5 h-5 text-gray-500" /></button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-4">
                        <div>
                            <label htmlFor="ex-name" className="block text-sm font-medium text-gray-700">Nombre del Ejercicio</label>
                            <input type="text" id="ex-name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm" />
                        </div>
                        <div>
                            <label htmlFor="ex-group" className="block text-sm font-medium text-gray-700">Grupo Muscular</label>
                            <input type="text" id="ex-group" value={muscleGroup} onChange={e => setMuscleGroup(e.target.value)} required className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm" />
                        </div>
                        <div>
                            <label htmlFor="ex-video" className="block text-sm font-medium text-gray-700">URL del Video (YouTube, etc.)</label>
                            <input type="url" id="ex-video" value={videoUrl} onChange={e => setVideoUrl(e.target.value)} className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm" />
                        </div>
                    </div>
                    <div className="p-6 bg-gray-50 flex justify-end gap-3">
                        <button type="button" onClick={onClose} className="py-2 px-4 border rounded-md text-sm font-medium">Cancelar</button>
                        <button type="submit" disabled={isSaving} className="py-2 px-4 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300">
                            {isSaving ? 'Guardando...' : 'Guardar Ejercicio'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// --- Componente Principal de la Vista ---
export const ProgramsView: React.FC = () => {
    const { masterExercises, isLoadingExercises, deleteMasterExercise } = useTrainer();
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingExercise, setEditingExercise] = useState<MasterExercise | null>(null);

    const handleOpenCreate = () => {
        setEditingExercise(null);
        setModalOpen(true);
    };

    const handleOpenEdit = (exercise: MasterExercise) => {
        setEditingExercise(exercise);
        setModalOpen(true);
    };

    const handleDelete = async (exerciseId: string) => {
        if (window.confirm("¿Seguro que quieres eliminar este ejercicio de tu banco?")) {
            try {
                await deleteMasterExercise(exerciseId);
            } catch (error) {
                alert("No se pudo eliminar el ejercicio.");
            }
        }
    };

    return (
        <>
            {isModalOpen && (
                <ExerciseEditorModal 
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                    exercise={editingExercise}
                />
            )}
            <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 flex items-center">
                        <Zap className="w-6 h-6 mr-3 text-red-500" />
                        Banco de Ejercicios
                    </h2>
                    <button onClick={handleOpenCreate} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md">
                        <PlusIcon className="w-5 h-5" />
                        Nuevo Ejercicio
                    </button>
                </div>
                
                {isLoadingExercises ? (
                    <p>Cargando ejercicios...</p>
                ) : (
                    <div className="space-y-3">
                        {masterExercises.length === 0 ? (
                            <p className="text-gray-500 text-center py-8">Aún no has creado ningún ejercicio. ¡Añade el primero!</p>
                        ) : (
                            masterExercises.map(ex => (
                                <div key={ex.id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center border border-gray-200">
                                    <div>
                                        <p className="font-semibold text-gray-900">{ex.name}</p>
                                        <p className="text-sm text-gray-600">{ex.muscleGroup}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => handleOpenEdit(ex)} className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-100 rounded-full">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => handleDelete(ex.id)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-100 rounded-full">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default ProgramsView;
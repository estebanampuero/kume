// src/components/ClientView.tsx

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Client, Workout, Exercise } from '../types';
import { DumbbellIcon, VideoCameraIcon } from './icons';
import { CheckCircle, Edit2, Save } from 'lucide-react';

// --- INICIO DE CAMBIOS: Sub-componente ExerciseCard interactivo ---
const ExerciseCard: React.FC<{ 
    exercise: Exercise;
    workoutId: string;
    exerciseIndex: number;
}> = ({ exercise, workoutId, exerciseIndex }) => {
    const { updateClientExercise } = useAuth();
    const [clientWeight, setClientWeight] = useState(exercise.clientWeight || '');
    const [clientNotes, setClientNotes] = useState(exercise.clientNotes || '');
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
        setIsSaving(true);
        const updatedExercise = { 
            ...exercise, 
            clientWeight: clientWeight,
            clientNotes: clientNotes,
        };
        await updateClientExercise(workoutId, exerciseIndex, updatedExercise);
        setIsSaving(false);
    };
    
    const toggleCompleted = async () => {
        const updatedExercise = { 
            ...exercise, 
            isCompleted: !exercise.isCompleted,
            clientWeight: clientWeight,
            clientNotes: clientNotes,
        };
        await updateClientExercise(workoutId, exerciseIndex, updatedExercise);
    };

    const cardBg = exercise.isCompleted ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200';
    const textColor = exercise.isCompleted ? 'text-gray-500' : 'text-gray-800';
    const textDecoration = exercise.isCompleted ? 'line-through' : '';

    return (
        <div className={`p-4 rounded-lg border shadow-sm transition-colors ${cardBg}`}>
            <div className="flex justify-between items-start">
                <div>
                    <h4 className={`text-lg font-bold ${textColor} ${textDecoration}`}>{exercise.name}</h4>
                    {exercise.videoUrl && (
                        <a href={exercise.videoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center gap-1 mt-1">
                            <VideoCameraIcon className="w-4 h-4" /> Ver Video
                        </a>
                    )}
                </div>
                <button 
                    onClick={toggleCompleted}
                    className={`p-2 rounded-full transition-colors ${exercise.isCompleted ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    aria-label={exercise.isCompleted ? 'Marcar como no completado' : 'Marcar como completado'}
                >
                    <CheckCircle className="w-5 h-5" />
                </button>
            </div>
            
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className={`${textDecoration}`}><p className="text-sm text-gray-500">Series</p><p className={`font-semibold text-lg ${textColor}`}>{exercise.sets}</p></div>
                <div className={`${textDecoration}`}><p className="text-sm text-gray-500">Reps</p><p className={`font-semibold text-lg ${textColor}`}>{exercise.reps}</p></div>
                <div className={`${textDecoration}`}><p className="text-sm text-gray-500">Descanso</p><p className={`font-semibold text-lg ${textColor}`}>{exercise.rest}</p></div>
                <div className={`${textDecoration}`}><p className="text-sm text-gray-500">Peso Sugerido</p><p className={`font-semibold text-lg ${textColor}`}>{exercise.weight || 'N/A'}</p></div>
            </div>

            {exercise.trainerNotes && (
                <div className="mt-4 p-3 bg-indigo-50 rounded-md">
                    <p className="text-sm font-semibold text-indigo-800">Notas del Entrenador:</p>
                    <p className="text-sm text-indigo-700">{exercise.trainerNotes}</p>
                </div>
            )}
            
            <div className="mt-4 space-y-3">
                <div>
                    <label htmlFor={`weight-${exercise.id}`} className="block text-sm font-medium text-gray-700">Peso Utilizado (kg/lbs)</label>
                    <input 
                        type="text" 
                        id={`weight-${exercise.id}`}
                        value={clientWeight}
                        onChange={(e) => setClientWeight(e.target.value)}
                        onBlur={handleSave} // Guarda al perder el foco
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Ej: 80kg"
                    />
                </div>
                <div>
                    <label htmlFor={`notes-${exercise.id}`} className="block text-sm font-medium text-gray-700">Mis Notas</label>
                    <textarea
                        id={`notes-${exercise.id}`}
                        rows={2}
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                        onBlur={handleSave} // Guarda al perder el foco
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="¿Cómo te sentiste? ¿Alguna dificultad?"
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

const WorkoutDayCard: React.FC<{ workout: Workout }> = ({ workout }) => (
    <div className="bg-surface p-4 sm:p-6 rounded-xl shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-text-primary mb-5 flex items-center gap-3">
            <DumbbellIcon className="w-6 h-6 text-primary" />
            {workout.day}
        </h3>
        <div className="space-y-4">
            {workout.exercises.map((exercise, index) => (
                <ExerciseCard 
                    key={`${exercise.id}-${index}`} 
                    exercise={exercise} 
                    workoutId={workout.id}
                    exerciseIndex={index}
                />
            ))}
        </div>
    </div>
);
// --- FIN DE CAMBIOS ---


export const ClientView: React.FC = () => {
    const { currentUser } = useAuth();
    const clientData = currentUser as Client;

    if (currentUser?.role !== 'client') return null;

    if (!clientData) {
        return <div className="p-8 text-center text-text-secondary">Cargando datos del cliente...</div>;
    }

    if (!clientData.plan || clientData.plan.workouts.length === 0) {
        return (
            <div className="p-8 text-center">
                 <h2 className="text-3xl font-bold text-text-primary mb-2">Bienvenido, {clientData.username}!</h2>
                <p className="text-text-secondary">Aún no tienes un plan de entrenamiento asignado. Por favor, contacta a tu entrenador.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <h2 className="text-4xl font-extrabold text-text-primary mb-6 text-center">Tu Plan de Entrenamiento</h2>
            <div className="space-y-8">
                {clientData.plan.workouts.map(workout => (
                    <WorkoutDayCard key={workout.id} workout={workout} />
                ))}
            </div>
        </div>
    );
};
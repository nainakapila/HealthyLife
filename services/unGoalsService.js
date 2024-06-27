import axios from 'axios';

export const fetchGoals = async () => {
    const response = await fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?json');
    const data = await response.json();
    return data;
};
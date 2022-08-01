import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import WeatherResume from 'components/Containers/WeatherInfo/WeatherResume';

describe('testing weather resume component', () => {
    const mockInfo = {
        icon: '10px',
        description: 'Poucas núvens'
    }
    it('checking weather description', async () => {
        render(<WeatherResume weather={mockInfo} loading={false} />)
        
        const descriptionText = screen.getByText(mockInfo.description)
        await waitFor(() => {
            expect(descriptionText).toBeInTheDocument();
        })
    })
})
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Modelo de Testes', () => {
    describe('something truthy and falsy', () => {
        it('true to be true', () => {
            expect(true).toBe(true);
        });

        it('false to be false', () => {
            expect(false).toBe(false);
        });
    });

    describe('App', () => {
        it('renders headline', () => {
            render(<App />);
            expect(screen.getByText('Vite + React')).toBeDefined();
        });
    });

})
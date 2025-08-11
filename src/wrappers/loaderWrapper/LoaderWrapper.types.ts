import React from 'react';

export interface ILoaderWrapperProps {
    children: React.ReactNode;
}

export interface IBlankLoaderWrapper {
    isLoading: boolean;
    children: React.ReactNode;
}

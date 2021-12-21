import React, {lazy, Suspense} from 'react';
import Spinner from './Spinner';

const Residential = lazy(() => import('./Residential'));
const Commercial = lazy(() => import('./Commercial'));

export default function Services() {
    return (
        <div className='pt-24'>
            <Suspense fallback={<Spinner />}>
                <Residential />
                <Commercial />
            </Suspense>
        </div>
    );
}
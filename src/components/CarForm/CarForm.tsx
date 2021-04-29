import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?: string; //if else statement. if there is an id, expect a string
    data?: {}
}

interface CarState {
    make: string;
    model: string;
}

export const CarForm = (props: CarFormProps) => {
    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore()
    const make = useSelector<CarState>(state => state.make)
    const { register, handleSubmit } = useForm({})

    const onSubmit = (data: any, event: any) => {
        console.log(props.id)

        if (props.id!) { //if id is not null (it exists) - update
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            // window.location.reload()
            event.target.reset();
        } else { //if null
            dispatch(chooseMake(data.make)) // create a new one.
            server_calls.create(store.getState())
            console.log(`Hello There is a New Car`)
            // window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Car Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model" />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year" />
                </div>
                <div>
                    <label htmlFor="condition">Condition</label>
                    <Input {...register('condition')} name="condition" placeholder="Condition" />
                </div>
                <div>
                    <label htmlFor="cost">Cost</label>
                    <Input {...register('cost')} name="cost" placeholder="Cost" />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
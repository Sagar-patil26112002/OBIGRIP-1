import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Home.css'
import californiapizza from '../images/CaliforniaPizza.jpg'
import calzonepizza from '../images/Calzonepizza.jpg'
import chicagopizza from '../images/chicagopizza.jpg'
import DetroitPizza from '../images/DetroitPizza.jpg'
import FrozenPizza from '../images/FrozenPizza.jpg'
import GreekPizza from '../images/GreekPizza.jpg'
import neapolitanpizza from '../images/neapolitanpizza.jpg'
import newyorkpizza from '../images/newyorkpizza.jpg'
import {CardPizza} from './CardPizza'

export const Home = () => {


    let array=[
        {title: 'California Pizza', image: californiapizza, price: '150Rs', rating : 4.3},
        {title: 'Calzone Pizza',image: calzonepizza,price: '130Rs',rating : 4.1},
        {title: 'Chicago Pizza',image: chicagopizza,price: '145Rs',rating : 4.0},
        {title: 'Detroit Pizza',image: DetroitPizza,price: '140Rs',rating : 3.9},
        {title: 'Frozen Pizza',image: FrozenPizza,price: '155Rs',rating : 3.6},
        {title: 'Greek Pizza',image: GreekPizza,price: '155Rs',rating : 4.1},
        {title: 'Neapolitan Pizza',image: neapolitanpizza,price: '140Rs',rating : 4.2},
        {title: 'Newyork Pizza',image: newyorkpizza,price: '145Rs',rating : 3.9}
    ]

    return (
        <div>
        <CardPizza data={array}/>
        </div>
    );
}

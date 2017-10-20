import React, { Component } from 'react';
import data from "../data/hadisi.json";
import moment from 'moment';
class Hadisi extends Component {
    render() {

        let hadisi = JSON.stringify(data);
        let hadisiObj = JSON.parse(hadisi);
        // console.log(hadisiObj);
        let randomHadis = (Number(moment().format('m')) % 7) * (Number(moment().format('m')));
        // console.log(Number(moment().format('s')) % 7);

        //let arrayOfHadiths = [];

        //hadisiObj.map(hadis => arrayOfHadiths.push(hadis.hadis))

        //let arrayOfHadithsFiltered = arrayOfHadiths.filter(hadis => hadis.length < 280);


        // let h = Number(moment().format('h'));
        // let rb = 4 * min * h ? min * h < maximum : min * h 


        /*         function getRandomInt(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
                } */

        return (
            <div>
                {
                    // hadisiObj[moment().format('m')].hadis
                    // hadisiObj[getRandomInt(0, 370)].hadis
                    hadisiObj[randomHadis].hadis
                    //arrayOfHadithsFiltered[randomHadis]
                }
            </div>
        );
    }
}

export default Hadisi;
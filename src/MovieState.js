import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

export const MovieState = () =>{
    return [
        {
            title:'The Athlete',
            mainImg:athlete,
            secondaryImg:athlete2,
            url:'/work/the-athlete',
            awards:[
                {
                    title:'Truly a masterpiece',
                    description:
                    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                },
                {
                    title:'Fresh look on a brutal sport',
                    description:
                    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                },
                {
                    title:'Its okay lmao',
                    description:
                    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                }
            ]
        },
        {
            title:'Good Times',
            mainImg:goodtimes,
            url:'/work/good-times',
            secondaryImg:goodtimes2,
            awards:[
                {
                    title:'Truly a masterpiece',
                    description:
                    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                },
                {
                    title:'Fresh look on a brutal sport',
                    description:
                    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                },
                {
                    title:'Its okay lmao',
                    description:
                    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                }
            ]
        },
        {
            title:'The Racer',
            mainImg:theracer,
            url:'/work/the-racer',
            secondaryImg:theracer2,
            awards:[
                {
                    title:'Truly a masterpiece',
                    description:
                    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                },
                {
                    title:'Fresh look on a brutal sport',
                    description:
                    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                },
                {
                    title:'Its okay lmao',
                    description:
                    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
                }
            ]
        }
    ]
}
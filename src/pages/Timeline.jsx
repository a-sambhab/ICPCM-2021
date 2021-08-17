// import { width } from '@material-ui/system';
import React from 'react';
import styled from 'styled-components'
import TimelineData from './TimelineData';

const ImpDates = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 350px; 
    background-color: #FFECDA;
    border-radius: 5px;
    margin: 20px;
    padding: 10px;

    @media screen and (max-width: 900px) {
        width: 70vw;
    }
    `; 

const Timeline = ()=> {
   return (<ImpDates >
       <h1 className = "Important_dates" style = {
                          {
                              textAlign: 'center',
                              marginBottom: '2px'
                          }
                      }>Important Dates</h1>
     
          {TimelineData.map(element=> {
              return (
                  <div className="single_date_card"
                  style = { 
                      {
                          marginLeft: '1vw'
                      }
                  }>
                      
                <div className="timeline_heading"  style = {
                    {
                        fontSize: "1.1rem",
                        fontWeight: "bold"
                    }
                }>
                    {element.tevent}
                     </div>
                     <div className = "timeline_date"> {element.tdate} </div>
                     </div>
              )
          })}
     
   </ImpDates>)
}

export default Timeline;


import React from 'react';
import BannerGenre from './BannerGenre';
import requests from './requests';
import '../../App.css';
import RowGenre from './RowGenre';
import Row from './Row';

export default function Documentaries() {
  return (
    <div className='app'>
    <BannerGenre fetchUrl={requests.fetchDocumentaries}/>
    <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} isLargeRow />
    <RowGenre title='Documentaries' start='0' end ='4' fetchUrl={requests.fetchDocumentaries} isLargeRow />
    <RowGenre start='5' end ='9' fetchUrl={requests.fetchDocumentaries} isLargeRow />
    <RowGenre start='10' end ='14' fetchUrl={requests.fetchDocumentaries} isLargeRow />
    <RowGenre start='15' end ='19' fetchUrl={requests.fetchDocumentaries} isLargeRow />
    </div>
  );
}

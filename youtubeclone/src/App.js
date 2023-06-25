import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar, Feed, VideoDetail,ChannelDetail, SearchFeed } from './components/index.js'

const App = () => (
   <BrowserRouter>
   <Box sx={{backgroundColor: "#1b1d21"}}>
     <Navbar />
     <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/Video/:id"  element={<VideoDetail />} />
        <Route path="/channel/:id" exact element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
     </Routes>
     </Box>
   </BrowserRouter>

)

export default App
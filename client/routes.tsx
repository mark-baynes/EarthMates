import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import AddEvent from './components/AddEvent.tsx'
import EventDetail from './components/EventDetail.tsx'
import Register from './components/Register.tsx'
import MyEvents from './components/MyEvents.tsx'
import About from './components/About.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/addEvent" element={<AddEvent />} />
    <Route path="/about" element={<About />} />
    <Route path="/register" element={<Register />} />
    <Route path="/my-Events" element={<MyEvents />} />
    <Route path="/:id" element={<EventDetail />} />
  </Route>
)

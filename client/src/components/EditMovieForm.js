import React from 'react'
import { useLocation } from 'react-router-dom';
export default function EditMovieForm() {
    const { state } = useLocation();
  return (
    <div>
      console.log({state.name} ); 
    </div>
  )
}

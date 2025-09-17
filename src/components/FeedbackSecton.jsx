import { getFeedback } from '@/app/api/feedback/route';
import React from 'react'
import Feedback from "@/components/homepage/Feedback";
const FeedbackSecton = async({locale}) => {
       const feedback = await getFeedback(locale);
  return (
    <div><Feedback feedback={feedback} /></div>
  )
}

export default FeedbackSecton
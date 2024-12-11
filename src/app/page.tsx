'use client'
import React, { useState } from 'react';
import Configuration from './components/Configuration.component';
import Papa from 'papaparse';

export default function Home() {
  return (
    <div>
      <Configuration />
    </div>
  )
}

"use client"

import React,{useState,useEffect,useRef} from 'react';
import {CldImage} from 'next-cloudinary';

const socialFormats = {
  "Instagram Square (1:1)": {width:1080 ,height:1080 ,aspectRatio:"1:1"},
  "Instagram Protrait (4:5)": {width:1080 ,height:1350 ,aspectRatio:"4:5"},
  "Twitter Post (16:9)": {width:1200 ,height:675 ,aspectRatio:"16:19"},
  "Twitter Header (3:1)": {width:1500 ,height:500 ,aspectRatio:"3:1"},
  "Facebook Cover (205:78)": {width:820 ,height:312 ,aspectRatio:"205:78"},
};

type SocialFormat = keyof typeof socialFormats;

export default function SocialShare () {
  return (
    <div>SocialShare</div>
  )
}


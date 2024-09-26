import React,{useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/navigation'

const VideoUpload = () => {
const [file,setFile] = useState<File | null>(null)
const [title,setTitle] = useState("");
const [description,setDescription] = useState("");
const [isUploading,setIsUploading] = useState(false)

const route = useRouter()
//max file size of 100mb

const MAX_FILE_SIZE = 100 * 1024 *1024

  return (
    <div>VideoUpload</div>
  )
}

export default VideoUpload
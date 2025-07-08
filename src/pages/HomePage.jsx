"use client"

import { useRef, useState } from "react"
import {
    PhotoIcon,
    MusicalNoteIcon,
    FilmIcon,
    DocumentIcon,
    PlusCircleIcon,
    ExclamationTriangleIcon,
    ArrowDownTrayIcon,
    TrashIcon,
    ArrowPathIcon,
    CloudArrowUpIcon,
} from "@heroicons/react/24/outline"
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg"

const ffmpeg = createFFmpeg({
    log: true,
    corePath: "https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js",
})

const outputFormats = {
    image: ["jpg", "jpeg", "png", "webp", "bmp", "ico", "tiff"],
    audio: ["mp3", "aac", "flac", "wav", "ogg", "wma", "m4a"],
    video: ["mp4", "webm", "avi", "mov", "mkv", "flv", "m4v"]
}


const HomePage = () => {
    const fileInputRef = useRef(null)
    const [selectedFiles, setSelectedFiles] = useState([])
    const [errorMsg, setErrorMsg] = useState("")
    const [convertedFiles, setConvertedFiles] = useState([])
    const [loadingIndex, setLoadingIndex] = useState(null)

    const handleFiles = (files) => {
        const allowedTypes = ["image/", "audio/", "video/"]
        const newFiles = Array.from(files)
        const validFiles = []
        const invalidFiles = []

        newFiles.forEach((file) => {
            const isValid = allowedTypes.some((type) => file.type.startsWith(type))
            if (isValid) {
                const typeGroup = file.type.split("/")[0]
                validFiles.push({ file, typeGroup, outputFormat: outputFormats[typeGroup][0] })
            } else {
                invalidFiles.push(file.name)
            }
        })

        if (invalidFiles.length > 0) {
            setErrorMsg(`Los siguientes archivos no son válidos: ${invalidFiles.join(", ")}`)
        } else {
            setErrorMsg("")
        }

        setSelectedFiles((prev) => [...prev, ...validFiles])
    }

    const handleChange = (e) => handleFiles(e.target.files)

    const handleDrop = (e) => {
        e.preventDefault()
        handleFiles(e.dataTransfer.files)
    }

    const handleClick = () => fileInputRef.current.click()

    const getIcon = (type) => {
        if (type === "image") return <PhotoIcon className="w-6 h-6 text-blue-500" />
        if (type === "audio") return <MusicalNoteIcon className="w-6 h-6 text-green-500" />
        if (type === "video") return <FilmIcon className="w-6 h-6 text-red-500" />
        return <DocumentIcon className="w-6 h-6 text-gray-500" />
    }

    const convertSingleFile = async (fileObj, index) => {
        const { file, outputFormat, typeGroup } = fileObj
        setLoadingIndex(index)

        if (!ffmpeg.isLoaded()) await ffmpeg.load()

        const inputName = file.name
        const outputName = inputName.replace(/\.[^/.]+$/, `.${outputFormat}`)

        ffmpeg.FS("writeFile", inputName, await fetchFile(file))
        await ffmpeg.run("-i", inputName, outputName)

        const data = ffmpeg.FS("readFile", outputName)
        const url = URL.createObjectURL(new Blob([data.buffer]))

        setConvertedFiles((prev) => [...prev, { name: outputName, url }])
        setLoadingIndex(null)
    }

    const downloadAll = () => {
        convertedFiles.forEach(({ name, url }) => {
            const link = document.createElement("a")
            link.href = url
            link.download = name
            link.click()
        })
    }

    const deleteFile = (index) => {
        setSelectedFiles((prev) => prev.filter((_, i) => i !== index))
    }

    const clearAll = () => {
        setSelectedFiles([])
        setConvertedFiles([])
        setErrorMsg("")
        setLoadingIndex(null)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-12">
            <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold ">
                            Conversor de Archivos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Gratis</span> e <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Inlimitado</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Convertí tus archivos multimedia de forma rápida y sencilla. Soporta imágenes, audio y video con
                            conversión instantánea.
                        </p>
                    </div>

                    {/* Error Message */}
                    {errorMsg && (
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3 shadow-sm">
                                <ExclamationTriangleIcon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{errorMsg}</span>
                            </div>
                        </div>
                    )}

                    {/* Upload Area or File List */}
                    {selectedFiles.length === 0 ? (
                        <div className="max-w-2xl mx-auto">
                            <div
                                className="relative border-2 border-dashed border-blue-300 rounded-2xl p-8 sm:p-12 bg-white/70 backdrop-blur-sm hover:bg-blue-50/70 cursor-pointer transition-all duration-300 hover:border-blue-400 hover:shadow-lg group"
                                onDrop={handleDrop}
                                onDragOver={(e) => e.preventDefault()}
                                onClick={handleClick}
                            >
                                <input type="file" multiple ref={fileInputRef} className="hidden" onChange={handleChange} />

                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <CloudArrowUpIcon className="w-10 h-10 text-white" />
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Arrastra tus archivos aquí</h3>
                                    <p className="text-gray-600 mb-6">o haz clic para seleccionar archivos</p>

                                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <PhotoIcon className="w-4 h-4 text-blue-500" />
                                            <span>Imágenes</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MusicalNoteIcon className="w-4 h-4 text-green-500" />
                                            <span>Audio</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FilmIcon className="w-4 h-4 text-red-500" />
                                            <span>Video</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-4xl mx-auto">
                            {/* File List */}
                            <div className="grid gap-4 mb-8">
                                {selectedFiles.map((f, idx) => {
                                    const converted = convertedFiles.find((c) => c.name.startsWith(f.file.name.replace(/\.[^/.]+$/, "")))

                                    return (
                                        <div
                                            key={idx}
                                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200"
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                                {/* File Info */}
                                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                                    <div className="flex-shrink-0">{getIcon(f.typeGroup)}</div>
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-sm font-medium text-gray-900 truncate">{f.file.name}</p>
                                                        <p className="text-xs text-gray-500">{(f.file.size / 1024 / 1024).toFixed(2)} MB</p>
                                                    </div>
                                                </div>

                                                {/* Controls */}
                                                <div className="flex items-center gap-3 flex-wrap">
                                                    {/* Format Selector */}
                                                    <select
                                                        className="text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        value={f.outputFormat}
                                                        onChange={(e) => {
                                                            const newFormat = e.target.value
                                                            setSelectedFiles((prev) =>
                                                                prev.map((file, i) => (i === idx ? { ...file, outputFormat: newFormat } : file)),
                                                            )
                                                        }}
                                                    >
                                                        {outputFormats[f.typeGroup].map((fmt) => (
                                                            <option key={fmt} value={fmt}>
                                                                .{fmt.toUpperCase()}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    {/* Convert Button */}
                                                    <button
                                                        onClick={() => convertSingleFile(f, idx)}
                                                        disabled={loadingIndex === idx}
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm font-medium"
                                                    >
                                                        {loadingIndex === idx ? <ArrowPathIcon className="w-4 h-4 animate-spin" /> : null}
                                                        Convertir
                                                    </button>

                                                    {/* Download Link */}
                                                    {converted && (
                                                        <a
                                                            href={converted.url}
                                                            download={converted.name}
                                                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                                                        >
                                                            <ArrowDownTrayIcon className="w-4 h-4" />
                                                            Descargar
                                                        </a>
                                                    )}

                                                    {/* Delete Button */}
                                                    <button
                                                        onClick={() => deleteFile(idx)}
                                                        className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                                                    >
                                                        <TrashIcon className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button
                                    onClick={handleClick}
                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                                >
                                    <PlusCircleIcon className="w-5 h-5" />
                                    Agregar archivos
                                </button>

                                {convertedFiles.length > 0 && (
                                    <button
                                        onClick={downloadAll}
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                                    >
                                        <ArrowDownTrayIcon className="w-5 h-5" />
                                        Descargar todos
                                    </button>
                                )}

                                <button
                                    onClick={clearAll}
                                    className="inline-flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                                >
                                    <TrashIcon className="w-5 h-5" />
                                    Limpiar lista
                                </button>
                            </div>

                            <input type="file" multiple ref={fileInputRef} className="hidden" onChange={handleChange} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HomePage

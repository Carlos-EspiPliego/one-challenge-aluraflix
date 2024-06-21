import { Route, Routes } from 'react-router-dom'
import { HomePage, AddNewVideoPage } from '@videoGallery'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addVideo" element={<AddNewVideoPage />} />

            <Route path="/*" element={<h1>Not Found</h1>} />
        </Routes>
    )
}

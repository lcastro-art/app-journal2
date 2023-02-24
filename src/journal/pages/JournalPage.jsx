import { AddOutlined } from '@mui/icons-material'
import { IconButton,Typography } from '@mui/material'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView,NothingSelectedView } from '../views'

export const JournalPage = () => {

    const dispatch = useDispatch();

    const { isSaving,active } = useSelector(store => store.journal);

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }
    return (
        <JournalLayout>
            {!!active ? <NoteView /> : <NothingSelectedView />}

            <IconButton
                onClick={onClickNewNote}
                disabled={isSaving}
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main',opacity: 0.9 },
                    position: 'fixed',
                    bottom: 50,
                    right: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 40 }} />
            </IconButton>
        </JournalLayout>

    )
}

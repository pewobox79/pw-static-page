import CircularProgress from '@mui/material/CircularProgress';

export default function SpinnerComponent() {
    return (
        <section
            style={{
                display: 'flex',
                height: '80vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress />
        </section>
    );
}

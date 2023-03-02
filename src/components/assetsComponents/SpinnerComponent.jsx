import CircularProgress from '@mui/material/CircularProgress';

export default function SpinnerComponent() {
    return (
        <section
            style={{
                display: 'flex',
                height: '80%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress />
        </section>
    );
}

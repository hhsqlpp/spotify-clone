export default function addListen(id: number) {
    fetch('http://localhost:5000/tracks/play/' + id, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({}),
    });
}

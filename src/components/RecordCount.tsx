import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { collection, getFirestore, getCountFromServer } from "firebase/firestore";

export function RecordCount({ path }: { path: string }) {
    const [count, setCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const collRef = collection(db, path);
        getCountFromServer(collRef).then((snapshot) => {
            setCount(snapshot.data().count);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, [path]);

    if (loading) return <CircularProgress size={16} sx={{ mr: 1 }} />;

    return (
        <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
            <Typography variant="body2" color="textSecondary">
                {count?.toLocaleString() ?? 0} records
            </Typography>
        </Box>
    );
}

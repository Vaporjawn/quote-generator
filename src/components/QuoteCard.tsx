
import React from 'react';
import { Card, CardContent, Typography, Skeleton } from '@mui/material';
import { Quote } from '../data/localQuotes';

interface QuoteCardProps {
  quote: Quote | null;
  loading?: boolean;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, loading }) => (
  <Card
    sx={{
      maxWidth: { xs: '100%', sm: 600 },
      margin: 'auto',
      mt: { xs: 2, sm: 4 },
      boxShadow: 3,
      borderRadius: 2,
      px: { xs: 1, sm: 2 },
    }}
  >
    <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
      {loading ? (
        <>
          <Skeleton variant="text" height={48} sx={{ mb: 2, fontSize: { xs: '1.25rem', sm: '2rem' } }} />
          <Skeleton variant="text" width="40%" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} />
        </>
      ) : (
        <>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: { xs: '1.25rem', sm: '2rem' }, wordBreak: 'break-word', mb: 2 }}
          >
            "{quote?.text}"
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontStyle: 'italic', fontSize: { xs: '1rem', sm: '1.25rem' } }}
          >
             {quote?.author}
          </Typography>
        </>
      )}
    </CardContent>
  </Card>
);

export default QuoteCard;

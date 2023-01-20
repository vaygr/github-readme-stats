// Limit middleware pathname config
export const config = {
  matcher: '/(.*)',
};

// Implement middleware
export default function middleware(request) {
  if (request.headers.get('edge-key') !== process.env.EDGE_KEY) {
    return new Response('Blocked for legal reasons.', { status: 451 });
  }
}

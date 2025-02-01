// prevent 404 from fetching a blank asset
export function GET() {
	return new Response()
}
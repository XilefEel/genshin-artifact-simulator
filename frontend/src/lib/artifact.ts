import type { ArtifactResponse } from "../types/artifact";

const BASE_URL = "http://localhost:8000";

export async function generateArtifact(): Promise<ArtifactResponse> {
  const response = await fetch(`${BASE_URL}/artifact`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

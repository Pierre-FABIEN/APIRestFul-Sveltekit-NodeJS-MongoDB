import { goto } from '$app/navigation';

export function handleRoleRedirection(role: string, isAuthenticated: boolean) {
	switch (role) {
		case 'admin':
			goto('/dashboard');
			break;
		case 'user':
			goto('/user');
			break;
		default:
			goto('/'); // ou une autre page par défaut
	}
}

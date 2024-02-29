import { AuthBindings } from "@refinedev/core";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export const authProvider = (to: string, data: Session): AuthBindings => {
  const login = async () => {
    signIn("google", {
      callbackUrl: to ? to.toString() : "/",
      redirect: true,
    });

    return {
      success: true,
    };
  };
  const logout = async () => {
    signOut({
      redirect: true,
      callbackUrl: "/login",
    });

    return {
      success: true,
    };
  };
  const onError = async (error: any) => {
    if (error.response?.status === 401) {
      return {
        logout: true,
      };
    }

    return {
      error,
    };
  };

  const check = async () => {
    if (status === "unauthenticated") {
      return {
        authenticated: false,
        redirectTo: "/login",
      };
    }

    return {
      authenticated: true,
    };
  };

  const getPermissions = async () => {
    return null;
  };
  const getIdentity = async () => {
    if (data?.user) {
      const { user } = data;
      return {
        name: user.name,
        avatar: user.image,
      };
    }

    return null;
  };

  return {
    login: login,
    logout: logout,
    onError: onError,
    check: check,
    getPermissions: getPermissions,
    getIdentity: getIdentity,
  };
};

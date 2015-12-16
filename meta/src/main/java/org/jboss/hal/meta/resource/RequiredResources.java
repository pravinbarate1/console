package org.jboss.hal.meta.resource;

import java.util.Set;

public interface RequiredResources {

    Set<String> getResources(String token);
    boolean isRecursive(String token);
}